<?php

namespace App\Http\Controllers;

use App\Helpers\ImageHelper;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use App\Models\ProjectImage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use Intervention\Image\Laravel\Facades\Image;


class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // sleep(20);
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
        $sortDirection = $request->input('sortDirection', 'desc');
        $status = $request->input('status');

        $query = Project::query();

        $query->with('created_by', 'updated_by', 'images');

        if ($status) {
            $query->where('status', $status);
        }
        $query->orderBy($sortBy, $sortDirection);

        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                return $sub_query->where('title', 'LIKE', "%{$search}%");
            });
        }

        $projects = $query->paginate(perPage: 10)->onEachSide(1);

        return Inertia::render('admin/projects/Index', [
            'projects' => $projects,
        ]);
    }

    public function all_projects()
    {
        return response()->json(Project::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/projects/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // sleep(10);
        // dd($request->all());
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'title_kh' => 'required|string|max:255',
            'code' => 'required|string|max:255|unique:projects,code',
            'order_index' => 'nullable|integer|min:0|max:255',
            'parent_code' => 'nullable|string',
            'status' => 'nullable|string',
            'images' => 'required|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $validated['created_by'] = request()->user()->id;
        $validated['updated_by'] = request()->user()->id;

        $image_files = $request->file('images');
        unset($validated['images']);

        foreach ($validated as $key => $value) {
            if ($value === null || $value === '') {
                unset($validated[$key]);
            }
        }

        $created_project = Project::create($validated);

        if ($image_files) {
            foreach ($image_files as $key => $image) {
                $created_image_name = ImageHelper::uploadAndResizeImage($image);
                ProjectImage::create([
                    'image' => $created_image_name,
                    'project_id' => $created_project->id,
                ]);
            }
        }

        return redirect('/admin/projects');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        if (count($project->images) > 0) {
            foreach ($project->images as $image) {
                ImageHelper::deleteImage($image->image, 'projects');
            }
        }
        $project->delete();
        return redirect('/admin/projects');
    }

    public function destroy_image(ProjectImage $image)
    {
        // Debugging (Check if model is found)
        if (!$image) {
            return redirect()->back()->with('error', 'Image not found.');
        }

        // Call helper function to delete image
        ImageHelper::deleteImage($image->image, 'projects');

        // Delete from DB
        $image->delete();

        return redirect('/admin/projects')->with('success', 'Image deleted successfully.');
    }
}

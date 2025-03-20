<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // sleep(20);
        $query = Project::query();

        $projects = $query->paginate(perPage: 3)->onEachSide(1);

        return Inertia::render('admin/projects/Index', [
            'projects' => $projects,
        ]);
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
        sleep(10);
        dd($request->all());
        $validated = $request->validate([
            'title' => 'required|string|min:5|max:255',
            'title_kh' => 'nullable|string|min:5|max:255',
            'code' => 'required|string|max:255|unique:projects,code',
            'order_index' => 'nullable|integer|min:0|max:255',
            'parent_code' => 'nullable|string',
            'status' => 'nullable|string',
            'images' => 'nullable|string',
        ]);

        $project = Project::create($validated);
        return response()->json($project, 201);
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
        //
    }
}

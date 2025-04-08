import { AutosizeTextarea } from '@/components/ui/autosize-textarea';
import { Button } from '@/components/ui/button';
import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem } from '@/components/ui/file-upload';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ProgressWithValue } from '@/components/ui/progress-with-value';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as inertiaUseForm } from '@inertiajs/react';
import { CloudUpload, Loader, Paperclip } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const formSchema = z.object({
    name: z.string().min(1).min(1).max(255),
    name_kh: z.string().min(1).min(1).max(255),
    code: z.string().min(1).max(255),
    status: z.string().max(255).optional(),
    short_description: z.string().max(500).optional(),
    short_description_kh: z.string().max(500).optional(),
    image: z.string().optional(),
    banner: z.string().optional(),
});

export default function Edit({ item }: { item: any }) {
    const [files, setFiles] = useState<File[] | null>(null);
    const [filesBanner, setFilesBanner] = useState<File[] | null>(null);

    const dropZoneConfig = {
        maxFiles: 100,
        maxSize: 1024 * 1024 * 4,
        multiple: false,
        accept: {
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/png': ['.png'],
            'image/gif': ['.gif'],
            'image/webp': ['.webp'],
        },
    };
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: item.name || '',
            name_kh: item.name_kh || '',
            code: item.code || '',
            status: item.status || 'active',
            short_description: item.short_description || '',
            short_description_kh: item.short_description_kh || '',
            image: '',
            banner: '',
        },
    });

    // ===== Start Our Code =====
    const { post, data, progress, processing, transform, errors } = inertiaUseForm();

    function onSubmit(values: z.infer<typeof formSchema>) {
        // toast(
        //     <pre className="mt-2 w-[320px] rounded-md bg-slate-950 p-4">
        //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        //     </pre>
        //   );
        try {
            transform(() => ({
                ...values,
                image: files ? files[0] : null,
                banner: filesBanner ? filesBanner[0] : null,
            }));
            post('/admin/page_positions/' + item.id + '/update', {
                preserveScroll: true,
                onSuccess: () => {
                    setFiles(null);
                    setFilesBanner(null);
                },
                onError: (e) => {
                    toast.error('Error', {
                        description: 'Failed to create.' + JSON.stringify(e, null, 2),
                    });
                },
            });
        } catch (error) {
            console.error('Form submission error', error);
            toast.error('Error', {
                description: 'Something went wrong!' + error,
            });
        }
    }
    // ===== End Our Code =====

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-10">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage>{errors.name && <div>{errors.name}</div>}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="name_kh"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name Khmer</FormLabel>
                                    <FormControl>
                                        <Input placeholder="ឈ្មោះ" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage>{errors.name_kh && <div>{errors.name_kh}</div>}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Unique Code</FormLabel>
                                    <FormControl>
                                        <Input placeholder="ex: TOPNAV" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage>{errors.code && <div>{errors.code}</div>}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <Select key={field.value} onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Status" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="active">Active</SelectItem>
                                            <SelectItem value="inactive">Inactive</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage>{errors.status && <div>{errors.status}</div>}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <FormField
                    control={form.control}
                    name="short_description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Short Description</FormLabel>
                            <FormControl>
                                <AutosizeTextarea placeholder="Put your Short Description" className="resize-none" {...field} />
                            </FormControl>
                            <FormMessage>{errors.short_description && <div>{errors.short_description}</div>}</FormMessage>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="short_description_kh"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Short Description Khmer</FormLabel>
                            <FormControl>
                                <AutosizeTextarea placeholder="Put your short description khmer" className="resize-none" {...field} />
                            </FormControl>
                            <FormMessage>{errors.short_description_kh && <div>{errors.short_description_kh}</div>}</FormMessage>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Image</FormLabel>
                            <FormControl>
                                <FileUploader
                                    value={files}
                                    onValueChange={setFiles}
                                    dropzoneOptions={dropZoneConfig}
                                    className="bg-background relative rounded-lg p-2"
                                >
                                    <FileInput id="fileInput" className="outline-1 outline-slate-500 outline-dashed">
                                        <div className="flex w-full flex-col items-center justify-center p-8">
                                            <CloudUpload className="h-10 w-10 text-gray-500" />
                                            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span>
                                                &nbsp; or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                                        </div>
                                    </FileInput>
                                    <FileUploaderContent>
                                        {files &&
                                            files.length > 0 &&
                                            files.map((file, i) => (
                                                <FileUploaderItem key={i} index={i}>
                                                    <Paperclip className="h-4 w-4 stroke-current" />
                                                    <span>{file.name}</span>
                                                </FileUploaderItem>
                                            ))}
                                    </FileUploaderContent>
                                </FileUploader>
                            </FormControl>
                            <FormMessage>{errors.image && <div>{errors.image}</div>}</FormMessage>
                            {/* Initial Image */}
                            {item.image && (
                                <div className="mt-4 p-1">
                                    <FormDescription className="mb-2">Uploaded Image.</FormDescription>
                                    <div className="grid w-full grid-cols-3 gap-2 rounded-md lg:grid-cols-5">
                                        <span
                                            key={item.image}
                                            className="group bg-background relative aspect-square h-auto w-full overflow-hidden rounded-md border p-0"
                                        >
                                            <img
                                                src={'/assets/images/page_positions/thumb/' + item.image}
                                                alt={item.image}
                                                className="h-full w-full object-contain"
                                            />
                                        </span>
                                    </div>
                                </div>
                            )}
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="banner"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Banner</FormLabel>
                            <FormControl>
                                <FileUploader
                                    value={filesBanner}
                                    onValueChange={setFilesBanner}
                                    dropzoneOptions={dropZoneConfig}
                                    className="bg-background relative rounded-lg p-2"
                                >
                                    <FileInput id="fileInput" className="outline-1 outline-slate-500 outline-dashed">
                                        <div className="flex w-full flex-col items-center justify-center p-8">
                                            <CloudUpload className="h-10 w-10 text-gray-500" />
                                            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span>
                                                &nbsp; or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                                        </div>
                                    </FileInput>
                                    <FileUploaderContent>
                                        {filesBanner &&
                                            filesBanner.length > 0 &&
                                            filesBanner.map((file, i) => (
                                                <FileUploaderItem key={i} index={i}>
                                                    <Paperclip className="h-4 w-4 stroke-current" />
                                                    <span>{file.name}</span>
                                                </FileUploaderItem>
                                            ))}
                                    </FileUploaderContent>
                                </FileUploader>
                            </FormControl>
                            <FormMessage>{errors.banner && <div>{errors.banner}</div>}</FormMessage>
                            {/* Initial Image */}
                            {item.banner && (
                                <div className="mt-4 p-1">
                                    <FormDescription className="mb-2">Uploaded Banner.</FormDescription>
                                    <div className="grid w-full grid-cols-2 gap-2 rounded-md lg:grid-cols-3">
                                        <span
                                            key={item.banner}
                                            className="group bg-background relative aspect-video h-auto w-full overflow-hidden rounded-md border p-0"
                                        >
                                            <img
                                                src={'/assets/images/page_positions/thumb/' + item.banner}
                                                alt={item.banner}
                                                className="h-full w-full object-cover"
                                            />
                                        </span>
                                    </div>
                                </div>
                            )}
                        </FormItem>
                    )}
                />
                {progress && <ProgressWithValue value={progress.percentage} position="start" />}
                <Button disabled={processing} type="submit">
                    {processing && (
                        <span className="size-6 animate-spin">
                            <Loader />
                        </span>
                    )}
                    {processing ? 'Submiting...' : 'Submit'}
                </Button>
            </form>
        </Form>
    );
}

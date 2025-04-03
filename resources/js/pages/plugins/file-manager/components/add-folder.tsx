import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ProgressWithValue } from '@/components/ui/progress-with-value';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as inertiaUseForm } from '@inertiajs/react';
import { FolderIcon, Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const formSchema = z.object({
    name: z.string().min(1).max(255),
});
export function AddFolder({ open, setOpen }: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });
    const { post, progress, processing, transform, errors } = inertiaUseForm();
    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            transform(() => ({
                ...values,
                parent_id: null,
            }));
            toast(JSON.stringify(values, null, 2));
            post('/api/file_manager/folders', {
                preserveScroll: true,
                onSuccess: (page) => {
                    form.reset();
                    if (page.props.flash?.success) {
                        toast.success('Success', {
                            description: page.props.flash.success,
                        });
                    }
                },
                onError: (e) => {
                    toast.error('Error: Upload Failed', {
                        description: 'Something went wrong.',
                    });
                },
                onFinish: () => {
                    setOpen(false);
                },
            });
        } catch (error) {
            console.error('Form submission error', error);
            // toast.error('Error', {
            //     description: 'Something went wrong!',
            // });
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/* <TooltipProvider>
                <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                        <DialogTrigger asChild>
                            <Button variant="link" className="focus-visible:border-none focus-visible:ring-0" size="icon">
                                <FolderPlusIcon />
                            </Button>
                        </DialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Add Folder</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider> */}
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Folder</DialogTitle>
                    <DialogDescription className="flex">
                        <span className="mr-1 font-semibold whitespace-nowrap">Path : </span>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink>Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <strong>/</strong>
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink>All Images</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <strong>/</strong>
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink>About Images</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-2">
                    <div className="items-center gap-4">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-5">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-6">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        <FolderIcon size={18} /> Name
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Folder Name" type="text" {...field} />
                                                    </FormControl>
                                                    <FormMessage>{errors.name && <div>{errors.name}</div>}</FormMessage>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

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
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

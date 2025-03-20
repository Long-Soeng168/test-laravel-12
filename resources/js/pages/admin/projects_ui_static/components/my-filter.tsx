'use client';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, ChevronsUpDown, FilterIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
    parent_code: z.string().optional(),
    status: z.string().optional(),
    sort_by: z.string().optional(),
});

export default function MyFilter() {
    const status_items = [
        {
            label: 'All',
            value: '',
        },
        {
            label: 'Public',
            value: '1',
        },
        {
            label: 'Not-Public',
            value: '0',
        },
    ] as const;

    const sort_by_items = [
        {
            label: 'Select Sort',
            value: '',
        },
        {
            label: 'Title (Z -> A)',
            value: 'title_desc',
        },
        {
            label: 'Title (A -> Z)',
            value: 'title_asc',
        },
        {
            label: 'Index (9 -> 0)',
            value: 'order_index_desc',
        },
        {
            label: 'Index (0 -> 9)',
            value: 'order_index_asc',
        },
    ] as const;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const params = new URLSearchParams(window.location.search);

            // Update or delete query parameters based on form values
            if (values.parent_code) {
                params.set('parent_code', values.parent_code);
            } else {
                params.delete('parent_code');
            }

            if (values.status) {
                params.set('status', values.status);
            } else {
                params.delete('status');
            }

            if (values.sort_by) {
                params.set('sort_by', values.sort_by);
            } else {
                params.delete('sort_by');
            }

            params.set('page', '1');

            // Push the updated query parameters to the URL
            // router.push(`?${params.toString()}`, { scroll: true });
            // Construct the new URL with updated query parameters
            const newUrl = `${window.location.pathname}?${params.toString()}`;

            // Refresh the whole page by setting window.location.href
            window.location.href = newUrl;
            console.log('Form values submitted:', values);
        } catch (error) {
            console.error('Form submission error', error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormLabel className="flex items-center gap-2">
                    <FilterIcon /> Filter
                </FormLabel>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Status</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn('w-full justify-between', !field.value && 'text-muted-foreground')}
                                                >
                                                    {field.value
                                                        ? status_items.find((status) => status.value === field.value)?.label
                                                        : 'Select status'}
                                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                                <CommandInput placeholder="Search status..." />
                                                <CommandList>
                                                    <CommandEmpty>No status found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {status_items.map((status) => (
                                                            <CommandItem
                                                                value={status.label}
                                                                key={status.value}
                                                                onSelect={() => {
                                                                    form.setValue('status', status.value);
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        'mr-2 h-4 w-4',
                                                                        status.value === field.value ? 'opacity-100' : 'opacity-0',
                                                                    )}
                                                                />
                                                                {status.label}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="sort_by"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Sort By</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn('w-full justify-between', !field.value && 'text-muted-foreground')}
                                                >
                                                    {field.value ? sort_by_items.find((sort) => sort.value === field.value)?.label : 'Select sort'}
                                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                                <CommandInput placeholder="Search sort..." />
                                                <CommandList>
                                                    <CommandEmpty>No sort found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {sort_by_items.map((sort) => (
                                                            <CommandItem
                                                                value={sort.label}
                                                                key={sort.value}
                                                                onSelect={() => {
                                                                    form.setValue('sort_by', sort.value);
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        'mr-2 h-4 w-4',
                                                                        sort.value === field.value ? 'opacity-100' : 'opacity-0',
                                                                    )}
                                                                />
                                                                {sort.label}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}

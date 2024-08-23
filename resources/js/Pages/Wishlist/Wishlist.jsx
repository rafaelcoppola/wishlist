import TextInput from '@/Components/TextInput';
import { Link, Head } from '@inertiajs/react';

export default function Wishlist({product}) {
    
    return (
        <>
            <Head title="Products" />
            <div className="h-[100vh] w-full bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 flex items-center justify-center">
                <div className="border rounded-xl w-[80%] ">
                    <table className="border-collapse table-auto w-full text-sm">
                        <thead>
                            <tr>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-4 pb-3 dark:text-slate-200 text-left">Song</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-4 pb-3 dark:text-slate-200 text-left">Artist</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-4 pb-3 dark:text-slate-200 text-left">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-slate-400">Notebook Gamer ASUS TUF Gaming</td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-slate-400"><TextInput /></td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-slate-400">1961</td>
                            </tr>
                            <tr>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-slate-400">Witchy Woman</td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-slate-400"><TextInput /></td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-slate-400">1972</td>
                            </tr>
                            <tr>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-slate-400">Shining Star</td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-slate-400"><TextInput /></td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-slate-400">1975</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
}
import { Button } from '@headlessui/react';
import { useForm } from '@inertiajs/react';

export default function Logout(props) {
    const { post } = useForm({
        logout: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('logout'));
    };

    return (
        <form onSubmit={submit}>
            <Button
                type='submit'
                name='logout'
                className="flex items-center px-3 py-2 dark:text-white dark:hover:text-white/80 border-solid border-2 border-stone-500 rounded-lg mr-2"
            >
                Logout
            </Button>
        </form>
    );
}
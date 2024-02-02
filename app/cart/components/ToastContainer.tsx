import { Toaster } from 'react-hot-toast';

const ToastContainer = () => {
    return (
        <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
                className: '',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                    alignItems: 'center'
                },
            }}
        />
    );
};

export default ToastContainer;

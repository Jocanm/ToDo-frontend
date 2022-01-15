import ReactLoading from 'react-loading'


export const ButtonLoading = ({ disabled, loading, text, className = "",type="submit", onClick=()=>{} }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={(disabled || loading) && true}
            className={className}
        >
            {loading ? (
                <div className="w-full h-full flex item-center justify-center">
                    <ReactLoading type='spin' height={24} width={26} />
                </div>
            ) : text}
        </button>
    );
};

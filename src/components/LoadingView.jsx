import ReactLoading from 'react-loading';

export const Loading = ({color="#000",height='8%',width='8%',fullScreen=true}) => {
    return (
        <div className={`${fullScreen ? 'h-screen mx-auto flex items-center justify-center':'flex item-center justify-center'}`}>
            <ReactLoading type="spin" height={height} width={width} color={color} />
        </div>
    )
}


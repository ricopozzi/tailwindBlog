
interface AvatarProps {
    compClass ?: string
}

export function Avatar({compClass}: AvatarProps){
    return(
        <div
        className={`bg-green-300 w-40 h-40 rounded-full flex justify-center align-center ${compClass}` }
        >
            <img 
            className="rounded-full w-[95%] h-[95%] m-auto "
            src='http://pm1.narvii.com/8044/4b0be00c3a199ecf3530e24e260e837a7338226fr1-736-736v2_00.jpg' />
        </div>
    )
}
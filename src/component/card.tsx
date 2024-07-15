interface CardProps {
    description: string,
    username: string,
}

export function Card({description, username}: CardProps) {
    return (
    <div className="drop-shadow-md shadow-2xl shadow-black p-5 w-96 h-52 bg-[#DBBCA1] flex flex-col items-center justify-between rounded-2xl">
        <p className=" text-center">"{description}"</p>
        <p className=" font-bold text-[#0A424F] ">@{username}</p>
  </div>)
} 
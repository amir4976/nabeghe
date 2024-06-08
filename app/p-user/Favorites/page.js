import DotedTitle from "@/components/DotedTitle"
import FavoritesFancyCard from "@/components/Favorites/FavoritesFancyCard"
import FavoritesModels from "@/models/Favorites"
import { authUser } from "@/utils/authUser"
import ConnectToDB from "@/utils/ConnectToDB"

async function page() {
  ConnectToDB()
  const user = await authUser()
  const findData = await FavoritesModels.find({userID:user.id}).populate('courseID')
 
  return (
    <>
    <DotedTitle title="علاقه مندی ها"/>
    <div className="courses grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
      {
        JSON.parse(JSON.stringify(findData)).map((favorite,index)=>(
          <FavoritesFancyCard data={favorite.courseID} key={index} />
        ))
      }
    </div>

    {
        JSON.parse(JSON.stringify(findData)).length === 0 && (
          <div className="w-full h-full flex justify-center items-center font-mainFont text-cetner mt-3">
            شرمنده هنوز علاقه مندیی ندارید 😔😔
          </div>
        )
        };
      </>
  )
}

export default page

import PromptCard from "./PromptCard";

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
  img,
  about,
}) => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between">
        <h1 className="head_text text-left">
          <span className="blue_gradient capitalize">{name}'s Profile</span>
        </h1>
        <div className="w-[250px] h-[250px] shadow-md flex flex-col items-center justify-center ">
          <img src={img} className="rounded-full w-[150px]" alt="User-image" />
          <h4 className="capitalize blue_gradient">{name}</h4>
          <h5 className="text-slate-500">{about}</h5>
        </div>
      </div>
      <p className="desc text-left leading-loose">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;

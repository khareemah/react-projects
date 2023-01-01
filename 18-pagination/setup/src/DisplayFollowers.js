import React from "react";

const DisplayFollowers = ({ followers }) => {
  console.log(followers);
  return (
    <>
      {followers.map((follower) => {
        const { avatar_url, html_url, login, id } = follower;
        return (
          <article className="card" key={id}>
            <img src={avatar_url} alt={login} />
            <h4>{login}</h4>
            <a href={html_url} className="btn">
              view profile
            </a>
          </article>
        );
      })}
    </>
  );
};

//  followers.map((follower) => {
//    return <Follower key={follower.id} {...follower} />;
//  });
// const Follower = ({ avatar_url, html_url, login }) => {
//   return (
//     <article className="card">
//       <img src={avatar_url} alt={login} />
//       <h4>{login}</h4>
//       <a href={html_url} className="btn">
//         view profile
//       </a>
//     </article>
//   );
// };

export default DisplayFollowers;

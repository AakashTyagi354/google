

const Avatar = ({url,className}) => {
  return (
    <img src={url}
     loading="lazy"
     alt="profile"
     className={`h-10  rounded-full cursor-pointer ${className}`}
      />
  )
}

export default Avatar
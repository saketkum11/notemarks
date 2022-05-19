import { Route, Routes } from "react-router-dom";
import { Archieve, Home, Label, Login, Profile, Signup, Trash } from "../Page";

const MyRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/label" element={<Label />} />
        <Route path="/archive" element={<Archieve />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};
export { MyRoute };

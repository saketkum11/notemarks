import { Route, Routes } from "react-router-dom";
import { Archieve, Home, Label, Profile, Trash } from "../Page";

const MyRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/label" element={<Label />} />
        <Route path="/archive" element={<Archieve />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Profile />} />
        <Route path="/signup" element={<Profile />} />
      </Routes>
    </>
  );
};
export { MyRoute };

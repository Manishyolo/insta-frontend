import React from "react";
import AppRoutes from "./Approutes";
import "./style.scss";
import { AuthProvider } from "./features/auth/auth.context";
import { PostProvider } from "./features/post/Post.Context";

const App = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <AppRoutes></AppRoutes>
      </PostProvider>
    </AuthProvider>
  );
};

export default App;

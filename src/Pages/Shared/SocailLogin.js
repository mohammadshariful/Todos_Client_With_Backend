import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import Loading from "./Loading";
const SocailLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="text-center">
      {error && <p className="text-error">{error.message}</p>}
      <div className="divider">OR</div>
      <button onClick={() => signInWithGoogle()} className="btn btn-outline">
        Continue with Google
      </button>
    </div>
  );
};

export default SocailLogin;

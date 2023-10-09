import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { DashboardLayout } from "../../layout";
// import useExampleHook from "../../hooks/useExampleHook";

export function Home() {
  //   const { sample } = useExampleHook();
  return (
    <DashboardLayout>
      <div>
        <div>This is my home page</div>
        <Button>
          <Link to="/login">Login</Link>
        </Button>
        {/* <div>{sample} hook data</div> */}
      </div>
    </DashboardLayout>
  );
}

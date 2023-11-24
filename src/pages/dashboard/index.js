import { Helmet } from "react-helmet-async";

export default function DashboardPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <h1 className="text-white">Dashboard Page</h1>
    </>
  );
}

import EmergencyResourceAllocation from "../pages/Admin/EmergencyResourceAllocation";
import Operations from "../pages/Doctor/Operations";
import Home from "../pages/Home";
import Specialist from "../pages/Specialist";
import Specialty from "../pages/Specialty";
import Paymentportal from "../pages/Admin/Paymentportal";
import Doctoravailability from "../pages/Admin/Doctoravailability";
export const routeItems = [
  { path: "/", element: <Home /> },
  { path: "/specialty", element: <Specialty /> },
  {
    path: "/spec",
    element: <Specialist />,
  },
 { path: "/Doctor/operation",element:<Operations/>},
 { path: "/Admin/Emergency",element:<EmergencyResourceAllocation/>},
 {path:"/Admin/paymentportal",element:<Paymentportal/>},
 {path:"/Admin/Doctoravailability",element:<Doctoravailability/>}
 
];

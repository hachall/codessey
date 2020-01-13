import Home from "./home/home"
import Course from "./course/course"
import Network from "./network/network"
import Contact from "./contact/contact"
import Tutors from "./tutors/tutors"


const routes = [
  { path: '/',
    component: Home },
  { path: '/python-course',
    component: Course},
  {
    path: '/tech-network',
    component: Network},
  {
    path: '/contact',
    component: Contact},
  {
    path: '/tutors',
    component: Tutors}
];



export default routes;


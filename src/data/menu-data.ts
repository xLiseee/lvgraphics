import { IMenuDT } from "@/types/menu-d-t";


const menu_data:IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About',
    link: '/about-me',
  },
  {
    id: 3,
    title: 'Portfolio',
    link: '/portfolio-standard',
      },


  {
    id: 5,
    title: 'Contact',
    link: '/contact',
  }
];



export default menu_data;

// mobile menus 
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
}[] = [
  {
    id:1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About',
    link: '/about-me',
  },
  {
    id: 3,
    title: 'Portfolio',
    link: '/portfolio-standard',
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact',
  }
]
export interface NavItem {
  title: string;
  route: string;
  external?: boolean;
}

const navigation: NavItem[] = [
  { title: 'Home', route: '/home' },
  { title: 'Music', route: '/music' },
  { title: 'Videos', route: '/videos' },
  { title: 'Past Shows', route: '/past-shows' },
  { title: 'About', route: '/bio' },
  { title: 'Store', route: 'https://hockeyteeth1.bandcamp.com/merch', external: true },
];

export const mailingListUrl = 'https://gmail.us5.list-manage.com/subscribe'
  + '?u=4a374bb0ae22afdfc30d38dce&id=0163152dc3';

export default navigation;

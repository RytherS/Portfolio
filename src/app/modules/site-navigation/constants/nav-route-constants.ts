export const homeRoute = '/home';
export const homeRouteLabel = 'Home';

export const projectsRoute = '/projects';
export const projectsRouteLabel = 'Projects';

export const contactRoute = '/contact';
export const contactRouteLabel = 'Contact';

export const aboutRoute = '/about';
export const aboutRouteLabel = 'About';

export const navRouteMappings: Map<string, string> = new Map<string, string>([
	[homeRoute, homeRouteLabel],
	[projectsRoute, projectsRouteLabel],
	[contactRoute, contactRouteLabel],
	[aboutRoute, aboutRouteLabel],
]);

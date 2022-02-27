type Device = 'mobile' | 'tablet' | 'pc';

export const mediaSize: { [key in Device]: string } = {
  mobile: '(max-width:767px)',
  tablet: '(min-width:768px) and (max-width:1023px)',
  pc: '(min-width:1024px)',
};

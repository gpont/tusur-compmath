import Euler from './Euler';
import TabsManager from './TabsManager';
import CauchyAdams4 from './IntLeftRectangle';
import NewtonPolinomial from './NewtonPolynomial';
import LagrangePolinomial from './LagrangePolynomial';
import IntMiddleRectangle from './IntMiddleRectangle';
import LinearSystem from './LinearSystem';

new TabsManager();
new Euler('euler');
new CauchyAdams4('int-left-rect');
new NewtonPolinomial('newton-polynomial');
new LagrangePolinomial('lagrange-polynomial');
new IntMiddleRectangle('int-mid-rect');
new LinearSystem('linear-system');

import chart1, { randomValuesChart1 } from './chart-1';
import chart2 from './chart-2';
import chart3 from './chart-3';
import chart4 from './chart-4';
import chart5 from './chart-5';
import chart6 from './chart-6';
import chart7 from './chart-7';
import chart8 from './chart-8';
import chart9 from './chart-9';

window.onload = () => {
  chart1();
  chart2();
  chart3();
  chart4();
  chart5();
  chart6();
  chart7();
  chart8();
  chart9();
  document.getElementById('randomValues').addEventListener('click', randomValuesChart1);
}
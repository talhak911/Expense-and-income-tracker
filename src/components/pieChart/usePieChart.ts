import {PieChartProps} from './PieChart';

export const usePieChart = ({data}: PieChartProps) => {
  const total = data.reduce((sum, item) => sum + item.amount, 0);

  const radius = 100;
  const centerX = 187.5;
  const centerY = 120;

  const createDonutSlice = (value: number, startAngle: number): string => {
    const endAngle = startAngle + (value / total) * 360;
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    const startX =
      centerX + radius * Math.cos((startAngle - 90) * (Math.PI / 180));
    const startY =
      centerY + radius * Math.sin((startAngle - 90) * (Math.PI / 180));
    const endX = centerX + radius * Math.cos((endAngle - 90) * (Math.PI / 180));
    const endY = centerY + radius * Math.sin((endAngle - 90) * (Math.PI / 180));

    const pathData = `
        M${startX},${startY}
        A${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY}
      `;

    return pathData;
  };

  return {
    total,
    createDonutSlice,
    centerX,
    centerY,
    radius,
  };
};

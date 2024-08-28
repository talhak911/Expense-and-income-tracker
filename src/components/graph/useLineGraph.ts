import { Dimensions } from "react-native";
import { TransactionType } from "../../types/types";


export const useLineGraph = (transactions: TransactionType[]) => {
 
  const { width } = Dimensions.get("window");
  const height = 186; // You can adjust the height as needed
const reverse = transactions.reverse()
const total =transactions.map((i)=>i.amount)
const max= Math.max(...total)
  // Helper function to generate the cubic Bezier path data for the line
  const generateBezierPath = () => {
    if (!reverse || reverse.length === 0) return "";

    const points = reverse.map((transaction, index) => {
      // Adjust x coordinate to ensure the last point aligns with the right edge of the screen
      const x = (width / (reverse.length - 1)) * index;
      const y = height - (transaction.amount / max) * height; // Example scale
      return { x, y };
    });

    let pathData = "";

    if (points.length === 1) {
      // Single transaction: Draw a straight line across the width
      pathData = `M${points[0].x},${points[0].y} L${width},${points[0].y}`;
    } else {
      // Multiple transactions: Generate Bezier curve
      pathData = `M${points[0].x},${points[0].y}`;

      for (let i = 1; i < points.length - 1; i++) {
        const cpx = (points[i].x + points[i + 1].x) / 2;
        const cpy = (points[i].y + points[i + 1].y) / 2;
        pathData += ` Q${points[i].x},${points[i].y} ${cpx},${cpy}`;
      }

      pathData += ` T${points[points.length - 1].x},${points[points.length - 1].y}`;
    }

    return pathData;
  };
  // Generate the shadow path by extending the line to the bottom of the graph
  const generateShadowPath = () => {
    const bezierPath = generateBezierPath();
    if (!bezierPath) return "";

    // Close the path by adding lines to the bottom of the SVG
    return `${bezierPath} L${width},${height} L0,${height} Z`;
  };

  const bezierPathData = generateBezierPath();
  const shadowPathData = generateShadowPath();

  return {
    shadowPathData,
    bezierPathData,
    height,width
  };
};

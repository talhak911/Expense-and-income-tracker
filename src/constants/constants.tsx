import FoodIcon from '../assets/icons/food';
import SalaryIcon from '../assets/icons/salary';
import ShoppingIcon from '../assets/icons/shopping';
import SubscriptionIcon from '../assets/icons/subscription';
import TransportationIcon from '../assets/icons/transportation';

export const Expenses = [
  {icon: <ShoppingIcon />, value: 'Shopping'},
  {icon: <SubscriptionIcon />, value: 'Subscription'},
  {icon: <FoodIcon />, value: 'Food'},
  {icon:<TransportationIcon/>,value:"Transportation"}
];

export const Incomes = [
  {icon: <SalaryIcon />, value: 'Salary'},
  {icon: <SalaryIcon />, value: 'Passive Income'},
];

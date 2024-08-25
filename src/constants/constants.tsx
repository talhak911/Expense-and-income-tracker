import FoodIcon from '../assets/icons/food';
import SalaryIcon from '../assets/icons/salary';
import ShoppingIcon from '../assets/icons/shopping';
import SubscriptionIcon from '../assets/icons/subscription';
import TransportationIcon from '../assets/icons/transportation';
import {FilterByType, SortByType} from '../types/types';

export const Expenses = [
  {icon: <ShoppingIcon />, value: 'Shopping'},
  {icon: <SubscriptionIcon />, value: 'Subscription'},
  {icon: <FoodIcon />, value: 'Food'},
  {icon: <TransportationIcon />, value: 'Transportation'},
];

export const Incomes = [
  {icon: <SalaryIcon />, value: 'Salary'},
  {icon: <SalaryIcon />, value: 'Passive Income'},
];

export const FilterBy: FilterByType[] = ['income', 'expense'];
export const SortBy: SortByType[] = ['highest', 'lowest', 'newest', 'oldest'];
export const Currencies = [
  {currency: 'Pakistan (PKR)', symbol: 'Rs '},
  {currency: 'Japan (JPY)', symbol: '¥'},
  {currency: 'United States (USD)', symbol: '$'},
  {currency: 'Russia (RUB)', symbol: '₽'},
  {currency: 'Germany (EUR)', symbol: '€'},
  {currency: 'Korea (WON)', symbol: '₩'},
];
export const spendFrequencyFilters: {
  name: string;
  filter: 'today' | 'week' | 'month' | 'year';
}[] = [
  {name: 'Today', filter: 'today'},
  {name: 'Week', filter: 'week'},
  {name: 'Month', filter: 'month'},
  {name: 'Year', filter: 'year'},
];

export const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const Days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

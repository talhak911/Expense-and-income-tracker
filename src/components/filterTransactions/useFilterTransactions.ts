import {
  FilterByType,
  SortByType,
  useFilterTransactionsProps,
} from '../../types/types';

export const useFilterTransactions = ({
  setFilterBy,
  setSortBy,
}: useFilterTransactionsProps) => {
  const handleFilterBy = (button: FilterByType) => {
    setFilterBy(prevActiveButton =>
      prevActiveButton === button ? null : button,
    );
  };

  const handleSortBy = (button: SortByType) => {
    setSortBy(prevActiveButton =>
      prevActiveButton === button ? null : button,
    );
  };

  const handleReset = () => {
    setFilterBy(null);
    setSortBy('newest');
  };
  return {
    handleFilterBy,
    handleSortBy,
    handleReset,
  };
};

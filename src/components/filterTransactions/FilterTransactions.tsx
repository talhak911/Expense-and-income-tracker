import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constants/colors';
import {CustomButton} from '../customButton/CustomButtom';
import {styles} from './styles';
import {FilterTransactionsProps} from '../../types/types';
import {useFilterTransactions} from './useFilterTransactions';
import {FilterBy, SortBy} from '../../constants/constants';

export const FilterTransactions = ({
  filterBy,
  sortBy,
  close,
  setFilterBy,
  setSortBy,
}: FilterTransactionsProps) => {
  const {handleFilterBy, handleReset, handleSortBy} = useFilterTransactions({
    setFilterBy,
    setSortBy,
  });
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingsText}>Filter Transaction</Text>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={{color: COLORS.purple}}>Reset</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.headingsText}>Filter By</Text>
      <View style={styles.filter}>
        {FilterBy.map((filter, index) => (
          <TouchableOpacity
            key={index}
            style={{
              ...styles.button,
              backgroundColor:
                filterBy === filter ? COLORS.lightPurple : 'white',
              borderColor: COLORS.lightBlack,
            }}
            onPress={() => handleFilterBy(filter)}>
            <Text
              style={{
                textTransform: 'capitalize',
                color: filterBy === filter ? COLORS.purple : COLORS.charcoal,
              }}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.headingsText}>Sort By</Text>
      <View style={styles.menus}>
        {SortBy.map(sort => (
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: sortBy === sort ? COLORS.lightPurple : 'white',
              borderColor: COLORS.lightBlack,
            }}
            onPress={() => handleSortBy(sort)}>
            <Text
              style={{
                textTransform: 'capitalize',
                color: sortBy === sort ? COLORS.purple : COLORS.charcoal,
              }}>
              {sort}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <CustomButton loading={false} onPress={close} title="Apply" />
    </View>
  );
};

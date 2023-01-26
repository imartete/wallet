import { UserForm } from 'components/UserForm/UserForm';
import { Section } from 'components/Section/Section';
import { StatisticstList } from 'components/StatisticsList/StatisticstList';

const StatisticsPage = () => {
  return (
    <div>
      <Section title="Phonebook">
        <UserForm />
      </Section>
      <Section title="Contacts">
        <>
          <StatisticstList />
        </>
      </Section>
    </div>
  );
};

export default StatisticsPage;

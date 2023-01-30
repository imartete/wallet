import { UserForm } from 'components/UserForm/UserForm';
import { Section } from 'components/Section/Section';

import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import { DiagramTab } from 'components/DiagramTab/DiagramTab';

const StatisticsPage = () => {
  return (
    <div>
      <Section title="User">
        <UserForm />
      </Section>
      HEAD
      <Section title="Contacts"></Section>
      <Section title="Statistics">
        <>
          <DiagramTab />
          <StatisticsList />
        </>
      </Section>
    </div>
  );
};

export default StatisticsPage;

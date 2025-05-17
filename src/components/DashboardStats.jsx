import React from 'react';
import { Card } from 'antd';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { mois: 'Jan', naissances: 15, mariages: 5, deces: 3 },
  { mois: 'Fév', naissances: 20, mariages: 8, deces: 4 },
  { mois: 'Mar', naissances: 18, mariages: 6, deces: 5 },
  { mois: 'Avr', naissances: 25, mariages: 10, deces: 6 },
];

const DashboardStats = () => (
  <Card className="mb-4">
    <h5 className="mb-3">Déclarations par mois</h5>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="mois" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="naissances" fill="#1890ff" name="Naissances" />
        <Bar dataKey="mariages" fill="#52c41a" name="Mariages" />
        <Bar dataKey="deces" fill="#f5222d" name="Décès" />
      </BarChart>
    </ResponsiveContainer>
  </Card>
);

export default DashboardStats;

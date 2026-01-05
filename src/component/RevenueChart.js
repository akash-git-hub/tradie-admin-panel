import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Card, Dropdown } from "react-bootstrap";

const data = [
  { name: "5k", sales: 20, profit: 20 },
  { name: "10k", sales: 70, profit: 35 },
  { name: "15k", sales: 40, profit: 28 },
  { name: "25k", sales: 45, profit: 55 },
  { name: "30k", sales: 50, profit: 35 },
  { name: "35k", sales: 30, profit: 90 },
  { name: "40k", sales: 58, profit: 40 },
  { name: "50k", sales: 38, profit: 67 },
  { name: "60k", sales: 90, profit: 58 }
];

const RevenueChart = () => {
  return (
    <Card className="border-0 shadow-sm rounded-4">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0">Revenue</h5>
          <Dropdown>
            <Dropdown.Toggle size="sm" variant="outline-warning">
              October
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>September</Dropdown.Item>
              <Dropdown.Item>August</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="sales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F87171" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#F87171" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="profit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="#F87171"
              fill="url(#sales)"
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke="#6366F1"
              fill="url(#profit)"
            />
          </AreaChart>
        </ResponsiveContainer>

        <div className="d-flex justify-content-center gap-4 mt-3">
          <span className="d-flex align-items-center gap-2">
            <span className="dot bg-danger"></span> Sales
          </span>
          <span className="d-flex align-items-center gap-2">
            <span className="dot bg-primary"></span> Profit
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RevenueChart;

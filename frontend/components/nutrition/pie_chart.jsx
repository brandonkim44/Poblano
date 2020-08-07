import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
];

// this.props.data = {
//     { name: 'Total Fat', value: 400 },
//     { name: 'Protein', value: 300 },
//     { name: 'Carbohydrates', value: 300 },
// }

const COLORS = ['#c3b5a6', '#b68109', '#776259'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text className="text" x={x} y={y} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

class NutritionChart extends PureComponent {

    constructor(props) {
        super(props);
    }
    
    // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

    render() {
        return (
            <PieChart width={this.props.width} height={this.props.height} onMouseEnter={this.onPieEnter}>
                <Pie
                    data={this.props.data}
                    cx={this.props.width / 2}
                    cy={200}
                    innerRadius={40}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    isAnimationActive={false}
                >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
            </PieChart>
        );
    }
}

export default NutritionChart;
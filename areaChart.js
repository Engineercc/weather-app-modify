// {
//   data.temp && (
//     <AreaChart
//       width={1000}
//       height={500}
//       data={modifiedArray}
//       margin={{
//         top: 5,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="time" />
//       <YAxis dataKey="temperature" />
//       <Tooltip />

//       <Area
//         type="monotone"
//         dataKey="minTemp"
//         name="Min. Temperature"
//         stackId="1"
//         stroke="#8884d8"
//         fill="#8884d8"
//       />
//       <Area
//         type="monotone"
//         dataKey="maxTemp"
//         name="Max. Temperature"
//         stackId="1"
//         stroke="#82ca9d"
//         fill="#82ca9d"
//       />
//     </AreaChart>
//   );
// }

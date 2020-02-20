const dummyTrucks = [
	{
		equipment: {
			id: 1,
			label: 24,
			notice: "Passenger rear-view mirror cracked, rear bumper scuffed.",
			status: "CON"
		},
		employeeShifts: ["MJ", "Tom", "Arran", "Steven"],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 2,
			label: 26,
			notice: null,
			status: "GO"
		},
		employeeShifts: ["Mustafa", "David", "Bill", "Ted"],
		parkingLocation: null,
		brixRecords: [
			{
				nozzle: 24.5,
				t1Tank: 52.3,
				t4Tank: 32.4,
				litersPurged: 80,
				timeMeasured: new Date()
			}
		]
	},
	{
		equipment: {
			id: 3,
			label: 32,
			notice: null,
			status: "INOP"
		},
		employeeShifts: ["Bill", null, "Dingus", "Chungus"],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 4,
			label: 36,
			notice: "Being serviced due to a rough idle.",
			status: "OOS"
		},
		employeeShifts: [null, "Erin", "Mavis", null],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 5,
			label: 36,
			notice:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deleniti dignissimos ducimus est et eveniet explicabo hic, incidunt itaque laboriosam maiores quam qui quo repellat repudiandae sed similique tenetur veritatis vero. Architecto dolorem fuga laborum repudiandae. Ipsum pariatur, reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deleniti dignissimos ducimus est et eveniet explicabo hic, incidunt itaque laboriosam maiores quam qui quo repellat repudiandae sed similique tenetur veritatis vero. Architecto dolorem fuga laborum repudiandae. Ipsum pariatur, reprehenderit.",
			status: "OOS"
		},
		employeeShifts: [null, null, "Whompst", null],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 6,
			label: 36,
			notice: null,
			status: "GO"
		},
		employeeShifts: [null, null, null, null],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1001,
			label: "TS",
			notice: null,
			status: null
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1002,
			label: "CTM-E",
			notice: null,
			status: null
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1003,
			label: "IM-E",
			notice: null,
			status: null
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1004,
			label: "IH-E",
			notice: null,
			status: null
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1005,
			label: "CTM-W",
			notice: null,
			status: null
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1006,
			label: "IM-W",
			notice: null,
			status: null
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	},
	{
		equipment: {
			id: 1007,
			label: "IH-W",
			notice: null,
			status: null
		},
		employeeShifts: [],
		parkingLocation: null,
		brixRecords: []
	}
];

export default dummyTrucks;

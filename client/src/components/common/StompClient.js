import React from "react";
import { Client } from "@stomp/stompjs";
import { MTR_PUBLISH } from "../../actions/constants";
import { useDispatch } from "react-redux";
import { updateTable } from "../../actions/magtable";

const StompClient = ({ setWSConnected }) => {
	const dispatch = useDispatch();
	const client = new Client({
		// 		brokerURL: "ws://localhost:8080/ws/websocket",
		brokerURL: "wss://sait-capstone2020.herokuapp.com/ws/websocket",
		reconnectDelay: 3000,
		heartbeatIncoming: 10000,
		heartbeatOutgoing: 10000
	});

	client.onWebSocketClose = () => {
		setWSConnected(false);
	};

	client.onConnect = () => {
		client.subscribe("/topic/mtr", onMessage);
		setWSConnected(true);
	};

	const onMessage = e => {
		const { type, payload } = JSON.parse(e.body);

		switch (type) {
			case MTR_PUBLISH:
				dispatch(updateTable(payload));
				break;
			default:
				console.log("Unknown WS Case");
		}
	};

	client.activate();

	return <></>;
};

export default StompClient;

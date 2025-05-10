class Villains {
    db = [
        {
            "id": "juggernaut",
            "name": "Juggernaut",
            "image": "/blabalbla",
            "set": ""
        },
        {
            "id": "loki",
            "name": "Loki",
            "image": "/blabalbla",
            "set": "",
            "phaseButton": <LokiButtons />
        },
    ];

    getVillain = function (id) {
        return this.db[id];
    }

    getPhaseButton = function (id) {
        return this.db[id].phaseButton || <GeneralButton />
    }
}

export default Villains;
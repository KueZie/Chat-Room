class PopUp {

    constructor(head, subtext) {

        this.$head = head;
        this.$subtext = subtext;

    }

    format() {

        return `
        
            <div class="popup-wrapper">
                <div class="pop-up">
                    <h3>${this.$head}</h3>
                    <p>${this.$subtext}<p/>
                </div>
            </div>
        
        `;

    }

}
class Message {

    constructor(author, content) {

        this.$author   = author;
        this.$content  = content;

    }

    set author(newAuthor) {
        this.$author = newAuthor;
    }
    set content(newContent) {
        this.$content = newContent;
    }

    get content() {
        return this.$content;
    }

    get author() {
        return this.$author;
    }

    format() {
        
        return `
        
        <div class="message-wrapper">
            <span class="author">${this.$author}: </span>
            <span class="content">${this.$content}</span>
        </div>
        
        `;

    }

}
self.addEventListener('message', (event) => {
    const getAnswer = (data) => {
        const words = data.split(" ");
        const salutations = ["hi", "greetings", "hello"];
        const questions = ["what", "where", "when", "who", "how", "?"];
        const pandaquests = ["panda", "pandaquests", "cool", "blog"];
        let isGreeting = false;
        let isAsking = false;
        let isPandaquests = false;
        
        words.forEach(element => {
            const elementSanitized = element.toLowerCase();
            
            if (salutations.includes(elementSanitized)) {
                isGreeting = true;
            }
            if (questions.includes(elementSanitized)) {
                isAsking = true;
            }
            if (pandaquests.includes(elementSanitized)) {
                isPandaquests = true;
            }
        });
    
        if (isPandaquests) {
            const variedAnswers = [
                "test",
                "test2", 
                "test3"
            ]            
            
            return variedAnswers[Math.floor(Math.random() * variedAnswers.length)];
        } else if (isGreeting) {
            return `Oh, hello there. How are you?`;
        } else if (isAsking) {
            return `You are asking me ${data}. That's an interestng question. I just asked myself that. I don't know.`;
        }
        return "The answer is 42";
    }   
    const { data } = event;
    console.log("received: data", data);
    
    const answer = getAnswer(data);
    self.postMessage(answer);
});

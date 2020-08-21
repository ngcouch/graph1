function network_stim(A, B, relation = "causes") {

    return "<p>"+ A + " " + relation + " " + B + "</p>";


}

function feedback_stim(A, B, relation = "causes", valence) {


    var sentence = "</p>"
    sentence += network_stim(A, B, relation)
    sentence += " is " + valence
    sentence += ".</p>"

    return sentence

}

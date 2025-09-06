const SpanSkills = (props) => {
    const {skill} = props
    return(
        <span className="border border-purple-700/50 bg-purple-900/30 text-purple-200 py-1 px-3 rounded-full text-sm hover:bg-purple-700  transition">
            {skill}
        </span>

    )
};

export default SpanSkills;
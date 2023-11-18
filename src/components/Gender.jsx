export const Gender = ({ gender, probability}) => {
    return (
        <table className={gender}>
            <thead>
                <tr>
                    <td>
                        <span className={`material-symbols-outlined ${gender}-icon`}>
                            {gender}
                        </span>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className='probability'>
                            {`${probability}%`}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
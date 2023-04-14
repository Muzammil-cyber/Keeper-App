export default function () {
    const date = new Date;
    const year = date.getFullYear();

    return (
        <footer>
            <p>
                Copyright &copy; {year}

            </p>
        </footer>
    )
}
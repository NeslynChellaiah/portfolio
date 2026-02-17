export const Logo = ({ logo, organization }: { logo: string; organization: string }) => {
    return (
        <img
            src={logo}
            alt={`${organization} logo`}
            className="w-12 h-12 object-cover border border-gray-100 rounded-md"
        />
    );
};
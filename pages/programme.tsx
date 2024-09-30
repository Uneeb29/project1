import Layout from '@/components/baselayout/layout';
import DecouvrirHero from '@/components/decouvrir/decouvrirHero';
import DecouvrirTabs from '@/components/decouvrir/decouvrirTabs';

export default function Decouvrir() {
    return (
        <Layout title="Decouvrir">
            <div >
                <DecouvrirHero />
                <DecouvrirTabs />
            </div>
        </Layout>
    );
}
